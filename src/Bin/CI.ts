import { exec } from 'child_process';
import consola from 'consola';

// Starting CI Process
consola.info('Starting CI Process...\n');

// Code Format Checking CI
consola.info('Running Code Format Checking CI...');
exec('yarn run check-format', (err, stdout, stderr) => {
	if (err) return consola.error(err);
	if (stderr) return consola.error(stdout);
	consola.success('Code Format Checking Passing.\n');

	// Linters CI
	consola.info('Running Linters CI...');
	exec('yarn run lint', (err, stdout, stderr) => {
		if (err) return consola.error(err);
		if (stderr) return consola.error(stdout);
		consola.success('Linters Passing.\n');

		// Display success message.
		consola.log('🚀 This code is ready to push and deployed!');
	});
});
