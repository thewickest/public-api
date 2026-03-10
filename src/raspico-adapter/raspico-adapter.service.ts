import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { mqtt, io, iot } from 'aws-iot-device-sdk-v2';
import { envVars } from 'src/config';

@Injectable()
export class RaspicoAdapterService {
    constructor(private readonly config: ConfigService) {}
    // TODO make this void and use a post with auth
    // TODO use store params to save the certs
    // TODO tests
    async switch(): Promise<string>{
        try {
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
            console.log('Connecting to AWS IoT...');
            await connection.connect();
            console.log('Connected successfully!');

            await connection.publish(
                topic!,
                message!,
                mqtt.QoS.AtLeastOnce
            );

            console.log('Message published successfully!');

            // Disconnect
            await connection.disconnect();
            console.log('Disconnected from AWS IoT');
            return await 'success'

        } catch (e) {
            console.log('error', e)
            return await 'failed'
        }
    }
}
