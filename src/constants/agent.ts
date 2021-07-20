import { HttpAgent, HttpAgentOptions } from '@dfinity/agent';

export default function agent (): HttpAgent {
    const config: HttpAgentOptions = {};
    if (window.location.host.includes('localhost')) {
        config['host'] = 'http://r7inp-6aaaa-aaaaa-aaabq-cai.localhost:8000';
    }
    const agent = new HttpAgent(config);
    if (window.location.host.includes('localhost')) {
        agent.fetchRootKey().catch(console.error);
    };
    return agent;
}