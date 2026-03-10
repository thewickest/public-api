export const envVars = (({
    ENDPOINT,
    Q_TOPIC,
    Q_MESSAGE,
    DEVICE_KEY_PATH,
    DEVICE_CERT_PATH,
    DEVICE_CA_PATH,
}) => ({
    ENDPOINT,
    Q_TOPIC,
    Q_MESSAGE,
    DEVICE_KEY_PATH,
    DEVICE_CERT_PATH,
    DEVICE_CA_PATH,
}))(process.env);