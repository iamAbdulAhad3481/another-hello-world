import React from 'react';

function Text({ title }) {
  return (
    <div class="jumbotron bg-white text-dark text-justify">
      <h1 class="display-6 mb-3">{title}</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-2" />
      <p className="m-3">It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  )
}
export default Text;
