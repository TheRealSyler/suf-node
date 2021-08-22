import { ConfigFile } from "suf-cli";

const config: ConfigFile = {
  tsDoc: {
    "title": "suf Node Functions",
    "dir": "lib",
    "out": "README.md",
    "exclude": ["index"],
  },
  license: {
    "name": "Leonard Grosoli",
    "type": "mit",
    "year": "2020",
    "out": "README.md",
    "file": "LICENSE",
  },
  badges: {
    github: 'TheRealSyler',
    name: 'suf-node',
    repo: 'suf-node',
    out: 'README.md',
    badges: [
      ['codecov', 'codecov'],
      ['githubIssues', 'github'],
      ['npmV', 'npm']
    ]
  }
};

export default config;
