import React from "react";
import "./Posts.css";
import { Header } from "../../components/header/Header";
import { FiEdit } from "react-icons/fi";
import {AiFillDelete} from 'react-icons/ai'

const Posts = () => {
  return (
    <>
      <Header />
      <div className="posts__container">
        <div className="posts__heading">
          <h1>OUR STORIES</h1> <button>CREATE POSTS</button>
        </div>
        <div className="posts__cards__container">
          <div className="card">
            <div className="card-top">
              <img src="/public/images/IMG_8092.JPG" alt="School Kids" />
            </div>
            <div className="card-bottom">
              <h3>How I retain and remember what I study</h3>
              <div className="divider"></div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur reprehenderit nostrum sed nemo recusandae ad iusto,
                nihil dolores id placeat quis tenetur eligendi autem animi
                debitis consequatur alias, totam ullam.
              </p>
              <div className="card__buttons">
                <button>
                  <FiEdit />
                </button>
                <button className="red"><AiFillDelete/></button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="/public/images/IMG_8092.JPG" alt="School Kids" />
            </div>
            <div className="card-bottom">
              <h3>How I retain and remember what I study</h3>
              <div className="divider"></div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur reprehenderit nostrum sed nemo recusandae ad iusto,
                nihil dolores id placeat quis tenetur eligendi autem animi
                debitis consequatur alias, totam ullam.
              </p>
              <div className="card__buttons">
                <button>
                  <FiEdit />
                </button>
                <button className="red"><AiFillDelete/></button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src="/public/images/IMG_8092.JPG" alt="School Kids" />
            </div>
            <div className="card-bottom">
              <h3>How I retain and remember what I study</h3>
              <div className="divider"></div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur reprehenderit nostrum sed nemo recusandae ad iusto,
                nihil dolores id placeat quis tenetur eligendi autem animi
                debitis consequatur alias, totam ullam.
              </p>
              <div className="card__buttons">
                <button>
                  <FiEdit />
                </button>
                <button className="red"><AiFillDelete/></button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src="/public/images/IMG_8092.JPG" alt="School Kids" />
            </div>
            <div className="card-bottom">
              <h3>How I retain and remember what I study</h3>
              <div className="divider"></div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur reprehenderit nostrum sed nemo recusandae ad iusto,
                nihil dolores id placeat quis tenetur eligendi autem animi
                debitis consequatur alias, totam ullam.
              </p>
              <div className="card__buttons">
                <button>
                  <FiEdit />
                </button>
                <button className="red"><AiFillDelete/></button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src="/public/images/IMG_8092.JPG" alt="School Kids" />
            </div>
            <div className="card-bottom">
              <h3>How I retain and remember what I study</h3>
              <div className="divider"></div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur reprehenderit nostrum sed nemo recusandae ad iusto,
                nihil dolores id placeat quis tenetur eligendi autem animi
                debitis consequatur alias, totam ullam.
              </p>
              <div className="card__buttons">
                <button>
                  <FiEdit />
                </button>
                <button className="red"><AiFillDelete/></button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-top">
              <img src="/public/images/IMG_8092.JPG" alt="School Kids" />
            </div>
            <div className="card-bottom">
              <h3>How I retain and remember what I study</h3>
              <div className="divider"></div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur reprehenderit nostrum sed nemo recusandae ad iusto,
                nihil dolores id placeat quis tenetur eligendi autem animi
                debitis consequatur alias, totam ullam.
              </p>
              <div className="card__buttons">
                <button>
                  <FiEdit />
                </button>
                <button className="red"><AiFillDelete/></button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Posts;
