import { HttpAgent, HttpAgentOptions } from '@dfinity/agent';

export default function agent (): HttpAgent {
    const config: HttpAgentOptions = {};
    if (window.location.host.includes('localhost')) {
        config['host'] = 'http://localhost:8000';
    }
    const agent = new HttpAgent(config);
    if (window.location.host.includes('localhost')) {
        agent.fetchRootKey().catch(console.error);
    };
    return agent;
}