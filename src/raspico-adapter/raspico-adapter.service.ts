import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { mqtt, io, iot } from 'aws-iot-device-sdk-v2';

@Injectable()
export class RaspicoAdapterService {
    private readonly logger = new Logger(RaspicoAdapterService.name);
    constructor(private readonly config: ConfigService) {}
    // TODO use auth
    // TODO use store params to save the certs
    // TODO tests
    async activate(): Promise<void> {
        try {
            //TODO change this
            const clientId = 'backend-server-id';
            const { 
                endpoint, topic, message, key, cert, ca
            } = this.config.getAll();

            const clientBootstrap = new io.ClientBootstrap();

            const configBuilder = iot.AwsIotMqttConnectionConfigBuilder.new_mtls_builder_from_path(
                cert!,
                key!
            );

            configBuilder.with_certificate_authority_from_path(undefined, ca);
            configBuilder.with_clean_session(false);
            configBuilder.with_client_id(clientId);
            configBuilder.with_endpoint(endpoint!);
            
            const clientConfig = configBuilder.build();

            // Create MQTT connection
            const client = new mqtt.MqttClient(clientBootstrap);
            const connection = client.new_connection(clientConfig);

            // Connect to AWS IoT
            this.logger.log('Connecting to AWS IoT...');
            await connection.connect();
            this.logger.log('Connected successfully!');

            await connection.publish(
                topic!,
                message!,
                mqtt.QoS.AtLeastOnce
            );

            this.logger.log('Message published successfully!');

            // Disconnect
            await connection.disconnect();
            this.logger.log('Disconnected from AWS IoT');
        } catch (e) {
            throw new Error(e);
        }
    }
}
