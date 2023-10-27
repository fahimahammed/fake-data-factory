// ESM
import { faker } from '@faker-js/faker';



function createRandomUser() {
    return {
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        desctiption: faker.string.alpha(),
        image: faker.image.avatar(),
        price: faker.number.float(),
        qunatity: faker.number.int(),
        onStock: faker.datatype.boolean(),
    };
}

const USERS = faker.helpers.multiple(createRandomUser, {
    count: 20,
});

console.log(USERS)