import type { Project, Spoke, TimelineGroup } from './types'

// Add, remove, or reposition hub spokes here. Angles are in degrees.
export const spokes: Spoke[] = [
  {
    id: 'agents',
    label: 'AI',
    shortLabel: 'AI',
    description: 'Context engines, model evaluation, MCP tooling and bounded agent execution.',
    angle: -90,
    radius: 43,
  },
  {
    id: 'identity',
    label: 'Identity',
    shortLabel: 'Identity',
    description: 'Credentials, OAuth, OIDC, OpenID4VC and permission protocols.',
    angle: -24,
    radius: 44,
  },
  {
    id: 'payments',
    label: 'Payments',
    shortLabel: 'Payments',
    description: 'EMV payment flows, HSMs, key architecture and production cryptography.',
    angle: 45,
    radius: 44,
  },
  {
    id: 'distributed',
    label: 'Blockchain & Distributed Systems',
    shortLabel: 'Distributed Systems',
    description: 'Cosmos, Polkadot, Hyperledger, ledgers, oracles and protocol infrastructure.',
    angle: 130,
    radius: 44,
  },
  {
    id: 'opensource',
    label: 'Open Source',
    shortLabel: 'Open Source',
    description: 'Public specifications, upstream contributions and interoperable tooling.',
    angle: 196,
    radius: 43,
  },
]

// Article body formatting:
// - **text** makes text bold.
// - Separate paragraphs with a blank line.
// - Start consecutive lines with "- " to create a bullet list.
// Use a backtick string (`...`) when the body needs multiple lines.
export const projects: Project[] = [
  {
    slug: 'cheqd-infrastructure',
    title: 'cheqd',
    eyebrow: 'Cosmos network · DID platform',
    year: '2022 — 2026',
    summary: 'Four years building cheqd’s identity network, developer platforms, payment systems and open-source credential tooling.',
    image: '/images/cheqd-infrastructure.svg',
    imageAlt: 'A distributed ledger connected to DID resolution and developer SDK layers',
    spokes: ['distributed', 'identity', 'opensource'],
    technologies: ['Go', 'Cosmos SDK', 'Rust', 'TypeScript'],
    featured: true,
    repo: 'https://github.com/cheqd/cheqd-node',
    links: [
      { label: 'cheqd-node', href: 'https://github.com/cheqd/cheqd-node' },
      { label: 'did-resolver-rs', href: 'https://github.com/cheqd/did-resolver-rs' },
      { label: 'cheqd SDK', href: 'https://github.com/cheqd/sdk' },
      { label: 'cheqd Studio', href: 'https://cheqd.io/solutions/cheqd-studio/' },
    ],
    sections: [
      { title: 'Overview', body: `For nearly four years at cheqd, I worked across the identity network, the products built on it and the open-source tools developers used to integrate it. My role moved between protocol engineering, applied cryptography, backend systems, SDKs and product delivery.

- **Chain performance:** Optimized the Cosmos SDK resource module in cheqd-node, reducing its complexity from O(n²) to O(n) and cutting gas usage as the number of resources grew.
- **Predictable network pricing:** Added oracle-backed fiat pricing so enterprise customers could pay stable USD-denominated fees while transactions continued to settle through the network token.
- **Cross-chain migration:** Helped move tokens and users from Dock Network to cheqd, covering the network transition rather than treating migration as a simple token transfer.
- **Products and SaaS:** Architected and delivered creds.xyz and cheqd Studio across Logto authentication, Stripe billing, APIs and frontend development.
- **Payment rails for credentials:** Built on-chain payment flows using Lit Protocol’s MPC-based distributed key management and threshold cryptography for verifiable-credential revocation.
- **Rust DID resolution:** Developed did-resolver-rs for did:cheqd with Tokio, Tonic and gRPC, giving applications a fast, standards-compatible way to resolve identifiers and resources.
- **OpenWallet integrations:** Contributed cheqd support upstream to ACA-Py and Credo TS so wallet and agent developers could use the network through established open-source frameworks.
- **Credential SDKs:** Extended SDK support across AnonCreds, SD-JWT and mDoc credential formats; DIDComm and OpenID4VC transport and exchange flows; and credential status-list implementations.` },
    ],
  },
  {
    slug: 'national-blockchain-project',
    title: 'National Blockchain Project',
    eyebrow: 'Digital credentials · E-governance',
    year: '2020 — 2022',
    summary: 'Hyperledger-based credential infrastructure behind IIT Kanpur’s blockchain digital-degree pilot and wider e-governance work.',
    image: '/images/national-blockchain-project.svg',
    imageAlt: 'A digital degree credential connected to a permissioned blockchain network',
    spokes: ['identity', 'distributed'],
    technologies: ['Hyperledger Fabric', 'Hyperledger Indy', 'Aries', 'W3C VC'],
    links: [
      { label: 'IIT Kanpur digital-degree launch', href: 'https://www.techcircle.in/2021/12/28/pm-modi-launches-blockchain-based-digital-degrees-at-iit-kanpur' },
      { label: 'Commit Twin protocol', href: 'https://github.com/DaevMithran/commit_twin' },
      { label: 'National Blockchain Project on LinkedIn', href: 'https://www.linkedin.com/company/national-blockchain-project/' },
      { label: 'Trential', href: 'https://trential.com/' },
    ],
    sections: [
      { title: 'Overview', body: `At the National Blockchain Project at IIT Kanpur, I worked on public-sector credential infrastructure across permissioned blockchains, decentralized identity, backend services and privacy-preserving cryptography.

- **Digital-degree pilot:** Worked on the blockchain platform used to issue IIT Kanpur’s digital degrees at its 54th convocation. The initiative was launched by Prime Minister Narendra Modi in December 2021 and made degrees independently verifiable and resistant to forgery.
- **E-governance credentials:** Developed with Hyperledger Fabric, Indy and Aries, and built microservices for issuing, managing and verifying credentials through an e-governance platform.
- **Anonymous e-voting:** Built and demonstrated a privacy-preserving voting flow using anonymous credentials. I used the Commit Twin protocol to prove in zero knowledge that two elliptic-curve commitments hide the same secret, with implementations in Go and Rust.
- **Cryptography research:** Explored programmable zero-knowledge techniques based on CL signature schemes for selective disclosure and privacy-preserving identity flows.
- **Continuing platform:** The broader credential work continues through Trential, whose platform supports W3C-aligned credential issuance, verification, wallets and enterprise integrations.` },
    ],
  },
  {
    slug: 'interledger-emv-cards',
    title: 'EMV card infrastructure',
    eyebrow: 'Payments · Applied cryptography',
    year: 'May — Oct 2026',
    summary: 'EMV and Open Payments infrastructure connecting POS terminals to Interledger through Go services and HSM-backed card cryptography.',
    image: '/images/interledger-emv.svg',
    imageAlt: 'An EMV payment card connected to an HSM and Interledger payment infrastructure',
    spokes: ['payments', 'opensource'],
    technologies: ['Go', 'EMV', 'HSM', 'gRPC'],
    repo: 'https://github.com/interledger/testnet',
    links: [
      { label: 'Interledger testnet', href: 'https://github.com/interledger/testnet' },
      { label: 'Cards API specifications', href: 'https://github.com/interledger/cards-openapi-specifications' },
      { label: 'Rafiki card integration', href: 'https://interledger.org/blog/rafiki-card-integration/' },
      { label: 'Interledger Foundation', href: 'https://interledger.org/' },
    ],
    sections: [
      { title: 'Overview', body: `At the Interledger Foundation, I built the payment and cryptographic infrastructure needed to connect established EMV card flows with Open Payments and the Interledger network without weakening the trust boundaries of the existing card ecosystem.

- **EMV to Interledger:** Developed and integrated payment workflows that let POS terminals process EMV transactions through Interledger using Open Payments.
- **Payment HSM integration:** Integrated a Thales Atalla AT1000 over PKCS11 and a custom protocol parser, with mTLS-secured connection pooling, health monitoring and failover for highly available cryptographic operations.
- **Cryptography as a service:** Exposed HSM-backed operations to Go microservices through clear gRPC APIs, keeping sensitive key material behind a dedicated security boundary.
- **Card-key architecture:** Designed the full key hierarchy, key ceremonies, derivation paths and secure key import/export flows in alignment with PCI DSS and PCI PIN requirements.
- **Authorization services:** Implemented Issuer and Merchant API microservices in Go for EMV/TLV message parsing and card-transaction authorization flows.` },
    ],
  },
  {
    slug: 'contexto',
    title: 'Contexto',
    eyebrow: 'Context engine · AI agents',
    year: '2026',
    summary: 'A context engine for long-running agents, with an OpenClaw plugin, AGNES hierarchical clustering and retrieval that works within a token budget.',
    image: '/images/contexto.svg',
    imageAlt: 'A branching agent context tree built from clustered conversation memories',
    spokes: ['agents', 'opensource'],
    technologies: ['TypeScript', 'OpenClaw', 'AGNES', 'Context retrieval'],
    featured: true,
    repo: 'https://github.com/ekailabs/contexto',
    links: [
      { label: 'Install on ClawHub', href: 'https://clawhub.ai/ekai/plugins/contexto' },
      { label: 'Contexto repository', href: 'https://github.com/ekailabs/contexto' },
      { label: 'Why AGNES', href: 'https://github.com/ekailabs/contexto/discussions/114' },
    ],
    sections: [
      { title: 'Context that compounds', body: 'Long-running agents need more than a sliding window. Contexto turns conversation history into a navigable context tree so useful detail can survive across sessions without sending the entire transcript back to the model.' },
      { title: 'AGNES clustering', body: 'The engine uses agglomerative hierarchical clustering to group related chunks from the bottom up. The resulting hierarchy preserves multiple levels of detail and gives retrieval a structure it can traverse rather than a flat list to search.' },
      { title: 'A plugin people can install', body: 'Contexto ships as a published OpenClaw context-engine plugin on ClawHub. It is a drop-in integration with one configuration key, while beam-search retrieval selects useful branches within the token budget available for the next turn.' },
    ],
  },
  {
    slug: 'openclaw-contributions',
    title: 'OpenClaw',
    eyebrow: 'Plugin SDK · Upstream contribution',
    year: '2026',
    summary: 'A merged OpenClaw contribution that added single-shot LLM completion to the Plugin SDK and exposed it to context-engine lifecycle hooks.',
    image: '/images/openclaw.svg',
    imageAlt: 'An extensible agent runtime connected to plugins and a context engine',
    spokes: ['agents', 'opensource'],
    technologies: ['TypeScript', 'Plugin SDK', 'LLM runtime', 'Context engines'],
    repo: 'https://github.com/openclaw/openclaw/pull/64294',
    links: [
      { label: 'Merged upstream PR #64294', href: 'https://github.com/openclaw/openclaw/pull/64294' },
      { label: 'Published Contexto plugin', href: 'https://clawhub.ai/ekai/plugins/contexto' },
      { label: 'OpenClaw repository', href: 'https://github.com/openclaw/openclaw' },
    ],
    sections: [
      { title: 'The missing runtime capability', body: 'Plugins and context engines could not make their own LLM calls without delegating through the main agent loop. That made custom compaction and relevance scoring consume an extra agent turn and blurred the boundary between plugin work and agent behavior.' },
      { title: 'What I added upstream', body: 'The merged contribution introduced api.runtime.llm.complete() for single-shot inference through the Plugin SDK. It also made the capability available to context engines during compact(), afterTurn() and maintain(), with typed request and result contracts.' },
      { title: 'Safe by construction', body: 'The API reuses the agent’s existing credentials and model resolution, remains backward compatible and does not alter tool execution, streaming or session persistence. Contexto provides the concrete context-engine use case behind the contribution.' },
    ],
  },
  {
    slug: 'openwallet-foundation',
    title: 'OpenWallet Foundation',
    eyebrow: 'Credo TS · ACA-Py contributions',
    year: '2022 — 2026',
    summary: 'Upstream contributions to Credo TS and ACA-Py across cheqd support, decentralized-identity interoperability and production agent tooling.',
    image: '/images/openwallet.svg',
    imageAlt: 'An open digital wallet connected to interoperable identity credentials',
    spokes: ['identity', 'opensource'],
    technologies: ['TypeScript', 'Python', 'Credo TS', 'ACA-Py'],
    repo: 'https://github.com/openwallet-foundation/credo-ts/pulls?q=is%3Apr+state%3Aclosed+author%3ADaevMithran',
    links: [
      { label: 'My Credo TS contributions', href: 'https://github.com/openwallet-foundation/credo-ts/pulls?q=is%3Apr+state%3Aclosed+author%3ADaevMithran' },
      { label: 'My ACA-Py contributions', href: 'https://github.com/openwallet-foundation/acapy/pulls?q=is%3Apr+state%3Aclosed+author%3ADaevMithran' },
      { label: 'OpenWallet Foundation', href: 'https://github.com/openwallet-foundation' },
    ],
    sections: [
      { title: 'Credo TS', body: 'I strengthened cheqd support in Credo TS, including a released fix for revocation-registry-definition resource naming. Contributing directly to the TypeScript framework made that support available where teams already build DID, verifiable-credential, DIDComm and OpenID4VC applications.' },
      { title: 'ACA-Py', body: 'I also contributed fixes and cheqd integration work to ACA-Py, bringing network support into the Python agent framework used for production credential workflows. Working upstream meant issuers, holders and verifiers could reuse the integration without depending on a private fork.' },
      { title: 'Interoperability in practice', body: 'Together, the Credo TS and ACA-Py contributions made cheqd usable through two established identity-agent stacks. The work focused on the less visible details that make interoperability durable: predictable resource handling, framework compatibility and integrations that the wider community can review, test and maintain.' },
    ],
  },
  {
    slug: 'agnap',
    title: 'AGNAP',
    eyebrow: 'Agent authorization protocol',
    year: '2026',
    summary: 'An open protocol for capability-bound execution in AI-agent runtimes, extending GNAP concepts to delegated authority and constrained action.',
    image: '/images/agnap.svg',
    imageAlt: 'Diagram of an agent negotiating a constrained grant with a protected service',
    spokes: ['agents', 'identity', 'opensource'],
    technologies: ['GNAP', 'Agent runtimes', 'Protocol design', 'Authorization'],
    featured: false,
    links: [
      { label: 'GNAP — RFC 9635', href: 'https://datatracker.ietf.org/doc/rfc9635/' },
    ],
    sections: [
      { title: 'The problem', body: 'Agents frequently receive credentials that are broader than the action they should perform. The protocol explores a narrower execution grant: bound to a specific agent, task, resource and runtime boundary.' },
      { title: 'The approach', body: 'AGNAP separates identity from permission and treats authorization as a negotiated, inspectable object. That enables gateways and runtimes to enforce what an agent may do without granting ambient authority.' },
      { title: 'Public work', body: 'The design is being evaluated through agent gateway and harness integrations and became the foundation of the UbuCon talk “A grant, not a credential.”' },
    ],
  },
  {
    slug: 'signxlit',
    title: 'SignXLit',
    eyebrow: 'Private attestations on EVM',
    year: '2024',
    summary: 'Access-controlled, encrypted attestations on any EVM chain using Sign Protocol and decentralized key management.',
    image: '/images/signxlit.svg',
    imageAlt: 'Encrypted attestation connected to a blockchain and access policy',
    spokes: ['identity', 'distributed', 'payments'],
    technologies: ['TypeScript', 'EVM', 'Lit Protocol', 'Sign Protocol'],
    featured: true,
    award: 'ETHGlobal Bangkok — 1st place Best Overall Application, 3rd place Private Attestations, and Best Developer Feedback in the Sign Protocol track',
    repo: 'https://github.com/DaevMithran/SignxLit',
    links: [
      { label: 'ETHGlobal showcase', href: 'https://ethglobal.com/showcase/signxlit-cynz9' },
      { label: 'Repository', href: 'https://github.com/DaevMithran/SignxLit' },
      { label: 'Sign Protocol', href: 'https://sign.global/' },
      { label: 'Lit Protocol', href: 'https://www.litprotocol.com/' },
    ],
    sections: [
      { title: 'The idea', body: 'Public attestations are useful, but some claims should only be readable when a policy is satisfied. SignXLit keeps the attestation verifiable while encrypting its private payload.' },
      { title: 'How it works', body: 'A user publishes an encrypted attestation through Sign Protocol. Lit Protocol manages decryption conditions such as time, location or smart-contract state. I integrated Lit into the Sign Protocol SDK and built a TypeScript CLI playground for experimenting with access policies.' },
      { title: 'Result', body: 'At ETHGlobal Bangkok, SignXLit won first place for Best Overall Application, third place for Best Use of Private Attestations, and Best Developer Feedback in the Sign Protocol track.' },
    ],
  },
  {
    slug: 'chain11',
    title: 'Chain11',
    eyebrow: 'Decentralized fantasy sports',
    year: '2026',
    summary: 'An EVM fantasy-cricket protocol using Chainlink Functions for trust-minimized scores, winner calculation and settlement.',
    image: '/images/chain11.svg',
    imageAlt: 'A cricket pitch connected to an oracle and an on-chain prize pool',
    spokes: ['distributed'],
    technologies: ['Solidity', 'Base', 'Chainlink Functions', 'Hardhat'],
    repo: 'https://github.com/DaevMithran/chain11',
    links: [
      { label: 'Repository', href: 'https://github.com/DaevMithran/chain11' },
      { label: 'Chainlink Functions', href: 'https://docs.chain.link/chainlink-functions' },
    ],
    sections: [
      { title: 'Overview', body: 'Chain11 is a decentralized fantasy-cricket protocol for EVM networks, built on Base. Solidity contracts manage contest creation, team submission, validation and prize distribution, while Chainlink Functions retrieves match data and performs score and winner calculation through a decentralized oracle network before results settle on-chain. I designed the contracts around batched operations and compact deployment sizes, allowing a contest to support more than 600 participants while keeping settlement cost independent of participant count.' },
    ],
  },
  {
    slug: 'fractionxchange',
    title: 'FractionXChange',
    eyebrow: 'Fractional NFT rental protocol',
    year: '2024',
    summary: 'A protocol that lets an NFT owner rent fractions of an asset for a limited period on the MANTRA ecosystem.',
    image: '/images/fractionxchange.svg',
    imageAlt: 'A tokenized asset divided into rentable fractions along a timeline',
    spokes: ['distributed', 'payments'],
    technologies: ['Go', 'Cosmos SDK', 'MANTRA', 'NFTs'],
    featured: true,
    award: 'Hackmos — 2nd place in both the Interchain and MANTRA tracks',
    repo: 'https://github.com/DaevMithran/FractionXChange',
    links: [
      { label: 'Repository', href: 'https://github.com/DaevMithran/FractionXChange' },
      { label: 'MANTRA', href: 'https://www.mantrachain.io/' },
    ],
    sections: [
      { title: 'The problem', body: 'NFT rental usually treats an asset as indivisible. That limits access models for tokenized assets whose utility can be shared or scheduled.' },
      { title: 'Protocol design', body: 'FractionXChange models fractional rental rights with a defined duration, while preserving the original owner’s underlying ownership.' },
      { title: 'Recognition', body: 'The project placed second in both the Interchain and MANTRA tracks at Hackmos 2024.' },
    ],
  },
  {
    slug: 'w3c2pdf',
    title: 'W3C2PDF',
    eyebrow: 'Credential interoperability',
    year: '2023',
    summary: 'A specification for bidirectional conversion between W3C verifiable credentials or presentations and PDF documents.',
    image: '/images/w3c2pdf.svg',
    imageAlt: 'A verifiable credential transforming into a PDF and back',
    spokes: ['identity', 'opensource'],
    technologies: ['W3C VC', 'PDF', 'Specification', 'Interoperability'],
    featured: true,
    repo: 'https://github.com/DaevMithran/W3C2PDF',
    links: [
      { label: 'Repository', href: 'https://github.com/DaevMithran/W3C2PDF' },
      { label: 'W3C VC Data Model', href: 'https://www.w3.org/TR/vc-data-model-2.0/' },
    ],
    sections: [
      { title: 'Why it matters', body: 'Credentials increasingly need to move between machine-verifiable systems and document workflows that still rely on PDFs.' },
      { title: 'The specification', body: 'W3C2PDF describes both directions of conversion and the information required to preserve verification context across the boundary.' },
      { title: 'Open design', body: 'The project is published as a compact public specification so implementers can discuss, test and extend the conversion model.' },
    ],
  },
  {
    slug: 'tendermint-load-test',
    title: 'Variable-validator load testing',
    eyebrow: 'Distributed systems benchmarking',
    year: '2022',
    summary: 'An extension for testing Tendermint networks while varying validator counts, making stress-test results more representative.',
    image: '/images/tendermint.svg',
    imageAlt: 'A performance chart connected to a changing validator network',
    spokes: ['distributed', 'opensource'],
    technologies: ['Shell', 'Tendermint', 'Benchmarking', 'Distributed systems'],
    repo: 'https://github.com/DaevMithran/tendermint-load-test',
    links: [{ label: 'Repository', href: 'https://github.com/DaevMithran/tendermint-load-test' }],
    sections: [
      { title: 'Problem', body: 'A fixed validator topology can hide behavior that appears when the network grows or becomes more distributed.' },
      { title: 'Extension', body: 'The tool varies the number of validators during test scenarios so throughput and reliability can be examined against topology changes.' },
      { title: 'Outcome', body: 'The resulting benchmark setup made stress-test predictions more useful for real Tendermint deployments.' },
    ],
  },
  {
    slug: 'agoric-vm',
    title: 'Agoric VM',
    eyebrow: 'Multichain developer environment',
    year: '2024',
    summary: 'A Vagrant-based virtual machine that streamlines reproducible multichain Agoric development environments.',
    image: '/images/agoric.svg',
    imageAlt: 'Multiple blockchain environments contained within one reproducible virtual machine',
    spokes: ['distributed', 'opensource'],
    technologies: ['Vagrant', 'TypeScript', 'Agoric', 'Developer tooling'],
    award: 'Agoric Fast Hack — 1st place',
    repo: 'https://github.com/DaevMithran/agoric-fast-hack',
    links: [{ label: 'Repository', href: 'https://github.com/DaevMithran/agoric-fast-hack' }],
    sections: [
      { title: 'Challenge', body: 'Multichain development environments are difficult to reproduce and expensive to configure repeatedly.' },
      { title: 'Build', body: 'The Agoric VM packages the setup into a Vagrant workflow, giving contributors a consistent environment for Agoric and orchestration work.' },
      { title: 'Recognition', body: 'The project won first place at the Agoric Fast Hack in 2024.' },
    ],
  },
  {
    slug: 'anon-aadhaar-groups',
    title: 'Private Aadhaar groups',
    eyebrow: 'Privacy-preserving identity',
    year: '2024',
    summary: 'Semaphoric groups created through Anon Aadhaar zero-knowledge proofs, without revealing a member’s underlying identity.',
    image: '/images/anon-aadhaar.svg',
    imageAlt: 'Anonymous people grouped around a zero-knowledge identity proof',
    spokes: ['identity', 'distributed'],
    technologies: ['Zero knowledge', 'Anon Aadhaar', 'Semaphore', 'Attestations'],
    award: 'ETHIndia — Ethereum Attestation Service Developer Experience track winner',
    links: [{ label: 'Anon Aadhaar', href: 'https://anon-aadhaar.pse.dev/' }],
    sections: [
      { title: 'Goal', body: 'Prove eligibility for a group without exposing the Aadhaar identity used to establish it.' },
      { title: 'Design', body: 'The project combines Anon Aadhaar’s zero-knowledge circuit with Semaphore-style anonymous groups and attestations.' },
      { title: 'Recognition', body: 'The work won the Ethereum Attestation Service Developer Experience track at ETHIndia 2024.' },
    ],
  },
]

export const timelines: TimelineGroup[] = [
  {
    id: 'experience',
    label: 'Experience',
    introduction: 'Production engineering across public infrastructure, identity networks and payment systems.',
    items: [
      { period: 'Sep 2020 — Sep 2022', startYear: 2020, endYear: 2022, title: 'National Blockchain Project, IIT Kanpur', subtitle: 'Blockchain Engineer', detail: 'Hyperledger identity infrastructure, credential platforms and zero-knowledge cryptography research.', projectSlug: 'national-blockchain-project' },
      { period: 'Sep 2022 — Feb 2026', startYear: 2022, endYear: 2026, title: 'cheqd', subtitle: 'Blockchain Engineer', detail: 'Identity chain development, credential SDKs, payment rails and open-source ecosystem integrations.', projectSlug: 'cheqd-infrastructure' },
      { period: 'Mar — May 2026', startYear: 2026, endYear: 2027, title: 'Ekai Labs', subtitle: 'AI Infrastructure Engineer', detail: 'Agent context engines, framework evaluation, OpenClaw contributions and authentication systems.', projectSlug: 'contexto' },
      { period: 'May — Oct 2026', startYear: 2026, endYear: 2027, title: 'Interledger Foundation', subtitle: 'Golang Engineer', detail: 'EMV payment workflows, HSM-backed cryptography, gRPC services and secure key architecture.', projectSlug: 'interledger-emv-cards' },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    introduction: 'A physics foundation, followed by focused study in programmable cryptography and blockchain systems.',
    items: [
      { period: '2024', startYear: 2024, endYear: 2025, title: 'PBA', subtitle: 'Polkadot Blockchain Academy · NUS', detail: '94 / 100 · Programmable cryptography, economics and Substrate.' },
      { period: '2016 — 2020', startYear: 2016, endYear: 2020, title: 'Indian Institute of Technology Hyderabad', subtitle: 'B.Tech, Engineering Physics', detail: 'Data structures, advanced cryptography and quantum physics.' },
    ],
  },
  {
    id: 'recognition',
    label: 'Recognition',
    introduction: 'Hackathon builds, awards and public speaking—each connected back to the work itself.',
    items: [
      { period: '2026', startYear: 2026, endYear: 2027, title: 'UbuCon selected speaker', subtitle: 'A grant, not a credential', detail: 'A talk about limiting what AI agents can do through bounded authorization.', projectSlug: 'agnap' },
      { period: '2024', startYear: 2024, endYear: 2025, title: 'ETHGlobal Bangkok', subtitle: '1st place — Sign Protocol', detail: 'Best Overall Application for private gated attestations.', projectSlug: 'signxlit' },
      { period: '2024', startYear: 2024, endYear: 2025, title: 'Hackmos', subtitle: 'Two 2nd-place track awards', detail: 'Interchain and MANTRA recognition for FractionXChange.', projectSlug: 'fractionxchange' },
      { period: '2024', startYear: 2024, endYear: 2025, title: 'ETHIndia', subtitle: 'Developer Experience winner', detail: 'Privacy-preserving Aadhaar groups and attestations.', projectSlug: 'anon-aadhaar-groups' },
      { period: '2024', startYear: 2024, endYear: 2025, title: 'Agoric Fast Hack', subtitle: '1st place', detail: 'A reproducible multichain Agoric development environment.', projectSlug: 'agoric-vm' },
      { period: '2022', startYear: 2022, endYear: 2023, title: 'Linux Foundation mentorship', subtitle: 'Hyperledger DRMan', detail: 'Selected mentee building GitHub/GitLab-based DID registry creation and access-control tooling.' },
    ],
  },
]

export const externalLinks = {
  github: 'https://github.com/DaevMithran',
  medium: 'https://medium.com/@mithran.daev',
  linkedin: 'https://www.linkedin.com/in/daev-mithran-30b314158',
  email: 'mailto:mithran.daev@gmail.com',
  calendly: 'https://calendly.com/mithran-daev/30min',
}
