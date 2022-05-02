import MockAdapter from 'axios-mock-adapter'
import {Product} from '../../model/product'
import axios from 'axios'
import 'react-native-get-random-values'
import {v4} from 'uuid'
import {CreateProductResponse} from '../../model/dto/createProductResponse'

const mock = new MockAdapter(axios, {delayResponse: 750})

mock.onGet('product/read').reply<Product[]>(200, [
  {
    id: v4(),
    name: "Harry Potter and the Philosopher's Stone",
    description:
      "When a letter arrives for unhappy but ordinary Harry Potter, a decade-old secret is revealed to him that apparently he's the last to know. His parents were wizards, killed by a Dark Lord's curse when Harry was just a baby, and which he somehow survived. Leaving his unsympathetic aunt and uncle for Hogwarts, a wizarding school brimming with ghosts and enchantments, Harry stumbles upon a sinister mystery when he finds a three-headed dog guarding a room on the third floor. Then he hears of a missing stone with astonishing powers which could be valuable, dangerous - or both. An incredible adventure is about to begin! These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON .",
    quantity: 13,
  },
])

mock.onDelete(/product\/([A-Za-z0-9-]+)$/).reply(204)

mock.onPost('product').reply<CreateProductResponse>(200, {id: v4()})
