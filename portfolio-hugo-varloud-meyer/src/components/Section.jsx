import React from 'react';

const Section = ({ id, title }) => {
  return (
    <section style={{ paddingTop: '60px' }} id={id}>
      <h2>{title}</h2>
      <p>This is the content of {title}</p>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Aliquam interdum porttitor tortor. Donec ultricies justo eget sapien. Proin ac est. Aliquam erat volutpat. In tempus scelerisque ligula. Morbi scelerisque urna. Duis ac nisl. Donec sed leo. Fusce posuere orci mollis nunc. Sed arcu enim, pharetra nec, aliquam eu, consectetuer sit amet, eros. Sed id enim. Etiam mattis est at elit. Pellentesque est risus, pellentesque nec, dignissim vitae, egestas vitae, sapien. Maecenas et eros non libero iaculis facilisis. Mauris porttitor tempor justo. Sed sollicitudin neque nec libero.

        Mauris ac ipsum. Duis ultrices erat ac felis. Donec dignissim luctus orci. Fusce pede odio, feugiat sit amet, aliquam eu, viverra eleifend, ipsum. Fusce arcu massa, posuere id, nonummy eu, pulvinar ut, wisi. Sed dui. Vestibulum nunc nisl, rutrum quis, pharetra eget, congue sed, dui. Donec justo neque, euismod eget, nonummy adipiscing, iaculis eu, leo. Duis lectus. Morbi pellentesque nonummy dui.

        Suspendisse vel felis. Ut lorem lorem, interdum eu, tincidunt sit amet, laoreet vitae, arcu. Aenean faucibus pede eu ante. Praesent enim elit, rutrum at, molestie non, nonummy vel, nisl. Ut lectus eros, malesuada sit amet, fermentum eu, sodales cursus, magna. Donec eu purus. Quisque vehicula, urna sed ultricies auctor, pede lorem egestas dui, et convallis elit erat sed nulla. Donec luctus. Curabitur et nunc. Aliquam dolor odio, commodo pretium, ultricies non, pharetra in, velit. Integer arcu est, nonummy in, fermentum faucibus, egestas vel, odio.
      </p>
    </section>
  );
};

export default Section;
