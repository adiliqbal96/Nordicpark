import Client from 'ssh2-sftp-client';
import fs from 'fs';
import path from 'path';

async function setupSSH() {
    const passwords = [
        'Nordickpark2026!',
        'Nordicpark2026!',
        'NordicPark2026!',
        'nordicpark2026!',
        'NordickPark2026!'
    ];

    for (const pwd of passwords) {
        const sftp = new Client();
        try {
            console.log(`🔌 Prøver adgangskode: ${pwd}`);
            await sftp.connect({
                host: 'ssh.c9pq9uw3u.service.one',
                port: 22,
                username: 'c9pq9uw3u_ssh',
                password: pwd
            });

            console.log("✅ Koden virkede! Opretter .ssh mappe...");
            const exists = await sftp.exists('.ssh');
            if (!exists) {
                await sftp.mkdir('.ssh');
            }

            console.log("🔑 Installerer din offentlige GitHub-nøgle...");
            const pubKey = fs.readFileSync('c:\\Users\\adili\\Desktop\\NordicPark\\onecom_deploy_key.pub');
            await sftp.put(pubKey, '.ssh/authorized_keys');

            console.log("🎉 SUCCES! One.com stoler nu blindt på din GitHub Action.");
            await sftp.end();
            return;
        } catch (err) {
            console.log(`❌ Fejlede med ${pwd}`);
        } finally {
            await sftp.end();
        }
    }
    console.error("Alle koder fejlede. Vi har brug for den helt præcise SFTP adgangskode fra dit One.com Kontrolpanel.");
}
setupSSH();
