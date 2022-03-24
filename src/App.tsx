import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='panel'>
        <div className='body'>
          <div className='header'>
            <div className='view'>
              <span>
                <a>Panel Title</a>
              </span>
            </div>
          </div>

          <div className='divider'></div>

          <div className='bar'>
            <b>Misc. Panel Info</b>
          </div>

          <div className='divider'></div>
          <div className='content'>
            <div className='body' data-simplebar>
              <div className='header'>Content Body Header</div>
              <div className='divider'></div>
              <div className='text'>Content body text</div>

              <div className='header'>Content Body Header</div>
              <div className='divider'></div>
              <div className='list'>
                <div className='item'>
                  <div className='title'>Lorem Ipsum</div>
                  <div className='description'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Natus impedit repellat magni dolores culpa omnis fugit eaque
                    laudantium asperiores, itaque, cum, dicta voluptatem
                    molestiae quam incidunt recusandae. Repellat maxime vitae
                    officia saepe a recusandae doloribus. Recusandae rerum non
                    est velit odio accusamus? Ab laborum ad corrupti delectus
                    quas dignissimos earum aliquam rerum eligendi numquam
                    maiores dolorum quasi expedita distinctio magnam id saepe,
                    excepturi maxime. Quae illo ea reiciendis molestiae?
                  </div>
                </div>
                <div className='item'>
                  <div className='title'>Lorem Ipsum</div>
                  <div className='description'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Natus impedit repellat magni dolores culpa omnis fugit eaque
                    laudantium asperiores, itaque, cum, dicta voluptatem
                    molestiae quam incidunt recusandae. Repellat maxime vitae
                    officia saepe a recusandae doloribus. Recusandae rerum non
                    est velit odio accusamus? Ab laborum ad corrupti delectus
                    quas dignissimos earum aliquam rerum eligendi numquam
                    maiores dolorum quasi expedita distinctio magnam id saepe,
                    excepturi maxime. Quae illo ea reiciendis molestiae?
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='divider'></div>

          <div className='footer'>
            <div className='footer-in'></div>

            <a className='footer-link' href='#'>
              2020 - Present &copy; Toxocious
            </a>
          </div>
        </div>
      </div>

      <div>
        <span className='job-type-tank'>
          <i className='icon-job-gla'></i>
        </span>

        <span className='job-type-tank'>
          <i className='icon-job-mrd'></i>
        </span>

        <span className='job-type-tank'>
          <i className='icon-job-drk'></i>
        </span>

        <span className='job-type-tank'>
          <i className='icon-job-gnb'></i>
        </span>
      </div>
    </div>
  );
}

export default App;
