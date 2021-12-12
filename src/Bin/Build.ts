import { exec } from 'child_process';
import consola from 'consola';

consola.info('Building source file from ./src...');
exec('yarn run build:native', (err, stdout, stderr) => {
	if (err) return consola.error(err);
	if (stderr) return consola.error(stderr);
	consola.success('Successfully transpiled source file into ./dist');
	consola.log('🚀 Source file has been transpiled to JavaScript code!');
});
