import * as Bunyan from 'bunyan';
import * as Config from 'config';

const log = Bunyan.createLogger({
    name: Config.get<string>('log.name'),
    level: Config.get<string>('log.level'),
    serializers: Bunyan.stdSerializers, src: true
});

log.info('I am alive!!!');
