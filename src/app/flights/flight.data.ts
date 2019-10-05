import { Flight } from './flight.model';
export const flights = [
  new Flight(1, 'S7', '78', 3115, 90,
    'Moscow', 'DME', new Date(2019, 9, 4, 10, 55),
    'Saint-Petersburg', 'LED', new Date(2019, 9, 4, 12, 25)),
  new Flight(2, 'S7', '36', 4375, 60,
    'Moscow', 'DME', new Date(2019, 9, 4, 15, 20),
    'Voronezh', 'VOZ', new Date(2019, 9, 4, 16, 20)),
  new Flight(3, 'S7', '74', 6000, 70,
    'Voronezh', 'VOZ', new Date(2019, 9, 4, 15, 20),
    'Chelyabinsk', 'CEK', new Date(2019, 9, 4, 16, 30)),
  new Flight(4, 'S7', '42', 8000, 140,
    'Chelyabinsk', 'CEK', new Date(2019, 9, 4, 15, 20),
    'Novosibirsk', 'OVB', new Date(2019, 9, 4, 17, 40)),
  new Flight(5, 'S7', '99', 3545, 90,
    'Saint-Petersburg', 'LED', new Date(2019, 9, 4, 15, 20),
    'Moscow', 'DME', new Date(2019, 9, 4, 16, 50)),
  new Flight(6, 'S7', '74', 6400, 110,
    'Moscow', 'DME', new Date(2019, 9, 4, 15, 20),
    'Chelyabinsk', 'CEK', new Date(2019, 9, 4, 17, 10)),
  new Flight(7, 'S7' ,'25', 9315, 240,
    'Chelyabinsk', 'CEK', new Date(2019, 9, 4, 15, 20),
    'Vladivostok', 'VVO', new Date(2019, 9, 4, 19, 20)),
  new Flight(8, 'S7', '78', 3115, 90,
    'Moscow', 'DME', new Date(2019, 9, 5, 10, 55),
    'Saint-Petersburg', 'LED', new Date(2019, 9, 5, 12, 25)),
  new Flight(9, 'S7', '36', 4375, 60,
    'Moscow', 'DME', new Date(2019, 9, 5, 15, 20),
    'Voronezh', 'VOZ', new Date(2019, 9, 5, 16, 20)),
  new Flight(10, 'S7', '74', 6000, 70,
    'Voronezh', 'VOZ', new Date(2019, 9, 5, 15, 20),
    'Chelyabinsk', 'CEK', new Date(2019, 9, 5, 16, 30)),
  new Flight(11, 'S7', '42', 8000, 140,
    'Chelyabinsk', 'CEK', new Date(2019, 9, 5, 15, 20),
    'Novosibirsk', 'OVB', new Date(2019, 9, 5, 17, 40)),
  new Flight(12, 'S7', '99', 3001, 90,
    'Saint-Petersburg', 'LED', new Date(2019, 9, 5, 15, 20),
    'Moscow', 'DME', new Date(2019, 9, 5, 16, 50)),
  new Flight(13, 'S7', '74', 4590, 110,
    'Moscow', 'DME', new Date(2019, 9, 5, 15, 20),
    'Chelyabinsk', 'CEK', new Date(2019, 9, 5, 17, 10)),
  new Flight(14, 'S7', '25', 9050, 240,
    'Chelyabinsk', 'CEK', new Date(2019, 9, 5, 15, 20),
    'Vladivostok', 'VVO', new Date(2019, 9, 5, 19, 20)),
];
