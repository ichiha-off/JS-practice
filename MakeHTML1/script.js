import { nodeOps } from "./nodeOps.js";

const body = nodeOps.qs('body');
const ul = nodeOps.create('ul');
nodeOps.append(body, ul);

const types = {
  error: 'strong',
  warning: 'em',
  info: 'span',
};

for (let msg of window.messages) {
  const li = nodeOps.create('li');
  const time = nodeOps.create('time');
  const type = nodeOps.create(types[msg.type])
  nodeOps.content(time, msg.date)
  nodeOps.content(type, `[${msg.type}] ${msg.text}`);
  nodeOps.append(ul, li);
  nodeOps.append(li, time)
  nodeOps.append(li, type)
}