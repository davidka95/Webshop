import MockAdapter from 'axios-mock-adapter'
import {Product} from '../../model/product'
import 'react-native-get-random-values'
import {v4} from 'uuid'
import {CreateProductResponse} from '../../model/dto/createProductResponse'
import {apiClient} from '../apiClient'

const mock = new MockAdapter(apiClient, {delayResponse: 750})

mock.onGet('product/read').reply<Product[]>(200, [
  {
    id: v4(),
    name: "Harry Potter and the Philosopher's Stone",
    description:
      "When a letter arrives for unhappy but ordinary Harry Potter, a decade-old secret is revealed to him that apparently he's the last to know. His parents were wizards, killed by a Dark Lord's curse when Harry was just a baby, and which he somehow survived. Leaving his unsympathetic aunt and uncle for Hogwarts, a wizarding school brimming with ghosts and enchantments, Harry stumbles upon a sinister mystery when he finds a three-headed dog guarding a room on the third floor. Then he hears of a missing stone with astonishing powers which could be valuable, dangerous - or both. An incredible adventure is about to begin! These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON .",
    quantity: 13,
  },
  {
    id: v4(),
    name: 'Harry Potter and the Chamber of Secrets',
    description:
      "The Dursleys were so mean that hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike.",
    quantity: 13,
  },
  {
    id: v4(),
    name: 'Harry Potter and the Prisoner of Azkaban',
    description:
      "When a letter arrives for unhappy but ordinary Harry Potter, a decade-old secret is revealed to him that apparently he's the last to know. His parents were wizards, killed by a Dark Lord's curse when Harry was just a baby, and which he somehow survived. Leaving his unsympathetic aunt and uncle for Hogwarts, a wizarding school brimming with ghosts and enchantments, Harry stumbles upon a sinister mystery when he finds a three-headed dog guarding a room on the third floor. Then he hears of a missing stone with astonishing powers which could be valuable, dangerous - or both. An incredible adventure is about to begin! These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON .",
    quantity: 13,
  },
  {
    id: v4(),
    name: 'Harry Potter and the Goblet of Fire',
    description: `Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup. He wants to find out about the mysterious event that's supposed to take place at Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn't happened for a hundred years. He wants to be a normal, fourteen-year-old wizard. But unfortunately for Harry Potter, he's not normal - even by wizarding standards. And in his case, different can be deadly.`,
    quantity: 13,
  },
])

mock.onDelete(/product\/([A-Za-z0-9-]+)$/).reply(204)

mock.onPost('product').reply<CreateProductResponse>(200, {id: v4()})

mock.onPut(/product\/([A-Za-z0-9-]+)$/).reply<CreateProductResponse>(204)
