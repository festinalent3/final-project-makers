export default function makeMany(stars, nr) {
  for (var i = 0; i < nr; i++)
  {
      //  Create a star inside of the 'stars' group
      var star = stars.create(i * 70, 0, 'star');

      //  Let gravity do its thing
      star.body.gravity.y = 300;

      //  This just gives each star a slightly random bounce value
      star.body.bounce.y = 0.7 + Math.random() * 0.2;
  }
}
