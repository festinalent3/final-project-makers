export default function createMany(group, key, nr) {
  group.enableBody = true;

  for (var i = 0; i < nr; i++)
  {
      group.create(i*10, 0, key);
  }

}
