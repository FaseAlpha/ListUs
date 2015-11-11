import uuid from 'node-uuid';

export default function getId() {
  return uuid.v1();
}