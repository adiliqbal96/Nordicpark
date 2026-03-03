const { execSync } = require('child_process');
try {
    const res = execSync('ssh -i c:\\Users\\adili\\Desktop\\NordicPark\\onecom_deploy_key -o StrictHostKeyChecking=no c9pq9uw3u_ssh@ssh.c9pq9uw3u.service.one "ls -la /customers/e/e/7/c9pq9uw3u/webroots/e199cb49"', { encoding: 'utf-8' });
    const fs = require('fs');
    fs.writeFileSync('c:\\Users\\adili\\Desktop\\NordicPark\\ssh_out2.txt', res);
    console.log("Done");
} catch (e) {
    console.log(e.stdout || e.message);
}
