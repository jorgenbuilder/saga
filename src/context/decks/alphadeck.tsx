import { idlFactory, canisterId } from 'dfx-generated/alphadeck';
import { Deck } from '.';
import { Actor, ActorSubclass } from '@dfinity/agent';
import agent from 'src/constants/agent';


export const deck: ActorSubclass<any> = Actor.createActor<any>(idlFactory, { agent: agent(), canisterId: canisterId });

const AlphaDeck: Deck = {
  name: 'Alpha Deck',
  serveCard(index: number) {
    return deck.serveCard(BigInt(index)).then((r: any) => r[0] as string);
  },
};

export default AlphaDeck;