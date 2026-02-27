import * as ftp from 'basic-ftp';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') }); // Might need to adjust depending on where .env is. Assuming root.
dotenv.config({ path: path.resolve(__dirname, '../.env.production') });


async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    // We assume the user has FTP_SERVER, FTP_USERNAME, FTP_PASSWORD in their environment,
    // but likely they have them as GitHub secrets, so we'll just prompt them to set them if missing.
    // However, they can pass them via terminal as well.
    const host = process.env.FTP_SERVER || 'ssh.c9pq9uw3u.service.one';
    const user = process.env.FTP_USERNAME || 'c9pq9uw3u_ssh';
    const password = process.env.FTP_PASSWORD;

    if (!password) {
        console.error("ERROR: Please set FTP_PASSWORD environment variable or add it to .env files");
        process.exit(1);
    }

    try {
        console.log(`Connecting to ${host}...`);
        await client.access({
            host: host,
            user: user,
            password: password,
            port: 22, // SFTP use 22, standard FTP uses 21. basic-ftp is for FTP/FTPS.
            // Note: One.com highly recommends standard SFTP on port 22, but basic-ftp strictly uses FTP(S) on port 21. Let's try 21 with secure true.
            secure: true
        });

        console.log("Connected successfully. Clearing remote directory /nordicpark.eu ...");
        await client.ensureDir("/nordicpark.eu");
        await client.clearWorkingDir();

        console.log("Uploading dist folder to /nordicpark.eu ...");
        await client.uploadFromDir(path.resolve(__dirname, "dist"));

        console.log("Deployment complete! ✅");

    } catch (err) {
        console.error("Deployment failed:", err);
    }
    client.close();
}

deploy();
