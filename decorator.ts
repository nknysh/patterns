interface IConnection {
    url: string;
    protocol: string;
};

class Connection {
    properties: IConnection;

    constructor(props: IConnection) {
        this.properties = props;
    };
};

// Decorator class that logs the creation of a connection
class ConnectionLogger {
    create = (data: IConnection) => {
        console.log(`Creating connection with url: ${data.url} and protocol: ${data.protocol}`);
        return new Connection(data);
    };
};

const connectionWithLogging = new ConnectionLogger();
const connection = connectionWithLogging.create({ url: "http://localhost:8080", protocol: "http" }); // Creating a connection with logging

console.log(connection);

