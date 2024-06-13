import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
// create two dummy articles
const post1 = await prisma.services.create({
    data : {
        name: 'Fibra Optica GO!',
        description: '¡La verdadera fibra óptica está en CNT desde 300 Mbps!',
        price: 35
    }, 
});
}

// execute the main function
main()
.catch((e) => {
console.error(e);
process.exit(1);
})
.finally(async () => {
// close Prisma Client at the end
await prisma.$disconnect();
});