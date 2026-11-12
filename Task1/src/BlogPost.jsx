import React from 'react';

import authorImg from './assets/profile_picture.jpg';

import img1 from './assets/all-encores.jpg';
import img2 from './assets/articulation.jpg';
import img3 from './assets/blurred.jpg';
import img4 from './assets/encores-2.jpg';
import img5 from './assets/the-cell.jpg';

function BlogPost() {
  return (
    <article className="blog-post">

      <h1 className="main-title">
        Erased Tapes:
        <br />
        Exploring the Sonic Frontier
      </h1>

      <p className="lead-paragraph">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque
        turpis posuere tempor? Leo condimentum himenaeos molestie elit; maximus
        iaculis proin nulla. Ullamcorper nibh cras conubia suscipit dapibus
        sagittis, facilisi habitant vivamus. Etiam fusce posuere himenaeos ipsum
        commodo sollicitudin himenaeos nec.
      </p>

      <h2 className="section-heading">Heading</h2>

      <p className="body-text">
        Montes ridiculus mus tellus nunc vulputate. Cras facilisi congue et
        facilisis porttitor litora etiam praesent porttitor. Sollicitudin
        cubilia scelerisque diam taciti lacus. Dapibus penatibus augue dapibus
        sagittis; rhoncus accumsan. Accumsan urna et ultrices placerat justo
        rutrum.
      </p>

      <p className="body-text">
        Laoreet volutpat hendrerit est aliquam; fusce quam tempor. Nisi interdum
        praesent pellentesque non non blandit cubilia et. Aptent maximus
        vehicula nullam odio tempor.
      </p>

      <h2 className="section-heading">Heading</h2>

      <p className="body-text">
        Habitasse ornare fames facilisis montes pulvinar habitasse fringilla.
        Risus porta cursus duis vivamus quam adipiscing nec. Ante at posuere
        eget aptent natoque vivamus ante.
      </p>

      <h2 className="section-heading">Heading</h2>

      <p className="body-text">
        Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar.
        Pharetra eu luctus id a potenti. Pulvinar egestas conubia ante varius
        lobortis iaculis metus.
      </p>

      {/* Gallery */}

      <section className="gallery-section">
        <img
          src={img1}
          alt="Featured Album"
          className="large-image"
        />

        <div className="small-gallery">
          <img src={img2} alt="Album 1" />
          <img src={img3} alt="Album 2" />
          <img src={img4} alt="Album 3" />
          <img src={img5} alt="Album 4" />
        </div>
      </section>

      {/* Author */}

      <section className="author-section">

        <img
          src={authorImg}
          alt="Author"
          className="author-photo"
        />

        <div className="author-bio">
          <h2 className="section-heading">The Author</h2>

          <p className="body-text">
            Sapien leo scelerisque per convallis torquent nunc. Lobortis
            eleifend a nam sit turpis nostra. Tempus suspendisse libero curae
            faucibus lobortis litora bibendum praesent.
          </p>
        </div>

      </section>

      {/* Comments */}

      <section className="comments-section">

        <h2 className="section-heading">
          Comments
        </h2>

        <div className="comment-item">
          <h4 className="commenter-name">
            soundseeker92
          </h4>

          <p className="body-text">
            This article beautifully captures the essence of experimental sound.
            Erased Tapes is truly pushing boundaries.
          </p>
        </div>

        <div className="comment-item">
          <h4 className="commenter-name">
            Ted Baker
          </h4>

          <p className="body-text">
            I've been following the label for years. Glad someone finally wrote
            about their impact.
          </p>
        </div>

        <div className="comment-item">
          <h4 className="commenter-name">
            Queen_of_noise
          </h4>

          <p className="body-text">
            I discovered Erased Tapes through Ólafur Arnalds and this article
            brought back memories.
          </p>
        </div>

      </section>

    </article>
  );
}

export default BlogPost;

