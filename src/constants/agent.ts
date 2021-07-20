import { HttpAgent, HttpAgentOptions } from '@dfinity/agent';
import { frontendCanisterId } from 'devconf';

export default function agent (): HttpAgent {
    const config: HttpAgentOptions = {};
    if (window.location.host.includes('localhost')) {
        config['host'] = `http://${frontendCanisterId}.localhost:8000`;
    }
    const agent = new HttpAgent(config);
    if (window.location.host.includes('localhost')) {
        agent.fetchRootKey().catch(console.error);
    };
    return agent;
}