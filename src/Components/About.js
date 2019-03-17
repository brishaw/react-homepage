import React, { Component } from 'react';
import './Style/About.css';

class About extends Component {
  render() {
    return (
      <section className="about">
        <section className="pane">
          <article>
            <p>Phasellus quis eros lorem. Aliquam porttitor magna sed odio consequat varius ac id erat. Aliquam suscipit semper lorem sit amet cursus. Mauris id ex ac magna venenatis aliquet a nec justo. Nam eget pellentesque risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </article>
          <article>
            <p>Duis non luctus ligula. Nunc laoreet convallis egestas. Aliquam laoreet, arcu nec volutpat consectetur, lectus lectus molestie justo, sit amet pulvinar nulla nisi accumsan leo. Cras egestas, turpis vel bibendum vehicula, nulla orci pharetra tellus, in venenatis urna urna sit amet eros. Maecenas gravida massa ac aliquam eleifend. Fusce a commodo mauris. Duis volutpat erat eget malesuada vestibulum. Quisque facilisis nisl fermentum diam pulvinar tempor.</p>
          </article>
          <article>
            <p>Mauris suscipit vel elit id rhoncus. Etiam eu maximus tortor. Nam rhoncus, sapien eu tristique dictum, mauris sapien eleifend nisl, rutrum bibendum tellus orci feugiat est. Aliquam faucibus ex elementum arcu consequat, quis blandit felis dictum. Nulla placerat, leo non commodo feugiat, dui turpis elementum nunc, nec suscipit ante arcu aliquet lacus. Suspendisse a gravida nulla. Praesent at efficitur tellus, eget commodo enim. Sed eget urna vel metus consequat finibus eget eget risus. Nullam in diam dui.</p>
          </article>
        </section>
      </section>
    )
  }
}

export default About;