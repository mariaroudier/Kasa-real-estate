/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './tag.css';

function Tag({ textTag }) {
  return (
    <div className="tag"><p className="tag-text">{textTag}</p></div>
  );
}

export default Tag;
