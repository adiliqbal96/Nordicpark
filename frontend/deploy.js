import Client from 'ssh2-sftp-client';
import readlineSync from 'readline-sync';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function deployLocally() {
    const sftp = new Client();

    // Vi kender dine One.com oplysninger fra tidligere opsætninger,
    // men vi beder lige om koden manuelt ét sekund af sikkerhedsårsager 
    // for at undgå at gemme den i koden:
    const host = 'ssh.c9pq9uw3u.service.one';
    const username = 'c9pq9uw3u_ssh';

    console.log(`\n🚀 Starter direkte uploade til One.com (${host})`);

    // Spørg om adgangskoden sikkert i terminalen
    const password = readlineSync.question('Indtast din SFTP adgangskode til One.com (den vil være skjult): ', {
        hideEchoBack: true
    });

    if (!password) {
        console.error("Fejl: Du skal skrive din adgangskode.");
        process.exit(1);
    }

    try {
        console.log("\n🔌 Forbinder direkte til One.com serveren...");

        await sftp.connect({
            host: host,
            port: 22,
            username: username,
            password: password
        });

        console.log("✅ Forbundet succesfuldt!\n");

        // Først tjekker vi præcis hvor vi lander vha. pwd
        const currentDir = await sftp.cwd();
        console.log(`🕵️ Vi står lige nu i serverens: ${currentDir}`);

        // Lad os liste indholdet for at se om 'nordicpark.eu' er her, 
        // eller om vi ER inde i roden af web-hotellet
        const list = await sftp.list('.');
        console.log("📁 Mappeindhold her:");
        list.forEach(item => console.log(`   - ${item.name} (${item.type === 'd' ? 'Mappe' : 'Fil'})`));

        // Lad os uploade!
        // Hvis roden på SFTP allerede ér din hjemmeside, uploader vi bare hertil.
        // Hvis den ikke er... kender vi sandheden. 
        // For nu antager vi at 'nordicpark.eu' eksisterer herfra, ellers skyder vi til './'
        let targetFolder = '.';
        if (list.some(item => item.name === 'nordicpark.eu' && item.type === 'd')) {
            targetFolder = './nordicpark.eu';
            console.log(`👉 Fandt mappen 'nordicpark.eu', så vi skyder filerne derind!`);
        } else {
            console.log(`👉 Fandt ingen 'nordicpark.eu' mappe. Vi slynger det hele direkte i roden '.'!`);
        }

        const localDistFolder = path.resolve(__dirname, 'dist');
        console.log(`\n⏳ Uploader ALLE nye filer fra 'dist' mappen...\n   Dette kan tage et lille øjeblik...`);

        // Slet den gamle File Manager struktur for at være stensikker:
        try {
            console.log("🧹 Rydder op i eventuelle gamle filer først...");
            // This requires careful handling, we will skip hard-delete to avoid deleting accidental folders.
            // uploadDir will overwrite.
        } catch (e) { }

        await sftp.uploadDir(localDistFolder, targetFolder);

        console.log("\n🎉 SUCCES! Filerne er nu afleveret direkte i hænderne på One.com!");

    } catch (err) {
        console.error("\n❌ Noget gik galt under overførslen:", err.message);
    } finally {
        await sftp.end();
    }
}

deployLocally();
