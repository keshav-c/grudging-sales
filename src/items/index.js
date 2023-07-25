import Phone from './comm.svg';
import Cooling from './cool.svg';
import HardDisk from './hdd.svg';
import InputDevice from './inpt.svg';
import Laptop from './lapt.svg';
import MotherBoard from './mobo.svg';
import Display from './moni.svg';
import Router from './netw.svg';
import Memory from './ram.svg';
import QuantumTunnelingDevice from './quan.svg';

export const itemImages = {
  phone: Phone,
  cooling: Cooling,
  'hard-disk': HardDisk,
  'input-device': InputDevice,
  laptop: Laptop,
  motherboard: MotherBoard,
  display: Display,
  router: Router,
  memory: Memory,
  'quantum-tunneling-device': QuantumTunnelingDevice,
};

export const items = [
  {
    itemId: 'phone',
    imageId: 'phone',
    title: '5G Smartphone',
    price: 100000,
    description: 'The latest in 5G technology.',
    salePrice: 99999,
  },
  {
    itemId: 'cooling',
    imageId: 'cooling',
    title: 'Liquid Cooling',
    price: 8000,
    description: 'Keep your computer cool with this liquid cooling system.',
    salePrice: 5000,
  },
  {
    itemId: 'hard-disk',
    imageId: 'hard-disk',
    title: 'Hard Disk Drive',
    price: 6333,
    description: '100TB of storage.',
  },
  {
    itemId: 'input-device',
    imageId: 'input-device',
    title: 'Mouse',
    price: 1799,
    description: 'High precision mouse.',
  },
  {
    itemId: 'laptop',
    imageId: 'laptop',
    title: 'Laptop',
    price: 200000,
  },
  {
    itemId: 'motherboard',
    imageId: 'motherboard',
    title: 'Motherboard',
    price: 25000,
    description: 'The latest in motherboard technology.',
  },
  {
    itemId: 'display',
    imageId: 'display',
    title: 'Monitor',
    price: 125000,
    description: '4K Liquid Flow Pixel Monitor.',
  },
  {
    itemId: 'router',
    imageId: 'router',
    title: 'Router',
    price: 5000,
    description: 'Wifi 6, 16x16 MU-MIMO.',
  },
  {
    itemId: 'memory',
    imageId: 'memory',
    title: '128GB DDR6 RAM',
    price: 18000,
    description: 'What will you even do with this?',
    salePrice: 17000,
  },
  {
    itemId: 'quantum-tunneling-device',
    imageId: 'quantum-tunneling-device',
    title: 'Quantum Entangled Hive Communicator',
    price: 500,
    description: 'Let your Tyrannid Overlords know you are ready to be assimilated.',
    salePrice: 5,
  },
];
