import faker from 'faker';

export default function seed(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    let image = faker.image.avatar();
    let email = faker.internet.email();
    let name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    let role = faker.random.word();
    let id = faker.random.uuid();
    users.push({
      image,
      email,
      name,
      role,
      id,
    });
  }
  return users;
}
