import React from 'react'
import $ from 'jquery'

const PostYosegaki = (props) =>
  <div className="yosegaki_form">
    <input id="name" className="yosegaki-name-form" type="text"></input>
    <textarea id="text" className="yosegaki-text-form"></textarea>
    <button onClick={() => props.actions.post_yosegaki($('#text').val(), $('#name').val())} className="yosegaki-post-btn">投稿する</button>
  </div>

export default PostYosegaki