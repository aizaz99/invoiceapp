const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'demo@demo.com' },
    update: {},
    create: {
      
            id: 'user_123456', 
            email: 'demo@demo.com',
            password: 'password123',
            name: 'Demo User',
          
    },
  });

  await prisma.invoice.createMany({
    data: [
      {
        vendor_name: 'Vendor A',
        amount: 250.0,
        due_date: new Date('2025-05-01'),
        description: 'Office Supplies',
        paid: false,
        userId: user.id,
      },
      {
        vendor_name: 'Vendor B',
        amount: 400.0,
        due_date: new Date('2025-06-15'),
        description: 'Consulting Fee',
        paid: true,
        userId: user.id,
      },
    ],
  });

  console.log('Seeded DB ✅');
}

main().finally(() => prisma.$disconnect());
