import styled from 'styled-components'

const form = styled.div`
  .hide {
    display: none;
  }
  .open {
    display: block;
  }
  .form-popup {
    position: fixed;
    bottom: 0;
    right: 15px;
    border: 3px solid #f1f1f1;
    border-bottom: 15px solid #b3ff66;
    border-bottom-image: url(border.png) 30 round;
    z-index: 99999;
  }
  .form-container {
    max-width: 300px;
    padding: 10px;
    background-color: white;
  }
  .form-container input[type=text], .form-container input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
  }
  .form-container input[type=text]:focus, .form-container input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }
  .form-container .btn {
    background-color: #4CAF50;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom:10px;
    opacity: 0.8;
  }
  .form-container .btn:hover, .open-button:hover {
    opacity: 1;
  }
`

export default {
  form
}