const dogs = [
  {
    id: "1",
    name: "Simba",
    breed: "Retriever",
    age: 3,
    owner: "Stuart",
    image:
      "https://www.hogarmania.com/archivos/201901/tipos-de-retriever-668x400x80xX.jpg",
    vaccines: true,
  },
  {
    id: "2",
    name: "Luna",
    breed: "Corgi",
    age: 2,
    owner: "Sheldon",
    image:
      "https://www.hogarmania.com/archivos/201809/corgi-gales-pembroke-668x400x80xX.jpg",
    vaccines: false,
  },
  {
    id: "3",
    name: "Coco",
    breed: "Shar Pei",
    age: 1,
    image:
      "https://www.hogarmania.com/archivos/201502/mascotas-shar-pei-1-668x400x80xX.jpg",
    owner: "Penny",
    vaccines: true,
  },
  {
    id: "4",
    name: "Thor",
    breed: "Pug",
    age: 2,
    owner: "Howard",
    image:
      "https://www.hogarmania.com/archivos/201105/carlino-xl-321x171x80xX.jpg",
    vaccines: true,
  },
  {
    id: "5",
    name: "Bella",
    breed: "Pomerania",
    age: 2,
    owner: "Bernadette",
    image:
      "https://www.hogarmania.com/archivos/202110/perro-pomerania-portada-321x171x80xX.jpg",
    vaccines: false,
  },
];
export function getDogs() {
  return Promise.resolve(dogs);
}

export function getDogById(dogId) {
  return Promise.resolve(dogs.find((dog) => dog.id === dogId));
}
