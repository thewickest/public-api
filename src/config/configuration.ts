export interface Config {
  endpoint: string | undefined;
  topic: string | undefined;
  message: string | undefined;
  key: string | undefined;
  cert: string | undefined;
  ca: string | undefined;
}

export default (): Config => ({
    endpoint: process.env.ENDPOINT,
    topic: process.env.Q_TOPIC,
    message: process.env.Q_MESSAGE,
    key: process.env.DEVICE_KEY_PATH,
    cert: process.env.DEVICE_CERT_PATH, 
    ca: process.env.DEVICE_CA_PATH
})