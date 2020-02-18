import styled from 'styled-components'

export const StyledHeader = styled.div`
@import "./variable.scss";

.header-container {
  position: fixed;
  z-index: 100;
  width: 100%;
  .navbar {
    background-color: rgba(0, 0, 0, 0.16);
    padding: 0;
    .navbar-toggler {
      outline: none;
      &.collapsed {
        outline: none;
      }
      .navbar-toggler-icon {
        background-image: url("https://images3.alphacoders.com/989/thumb-350-989300.jpg");
        @media (max-width: 800px) {
          display: none;
        }
      }
    }
    .navbar-brand {
      @media (max-width: 991px) {
        font-size: 62px;
      }
        @media (min-width: 992px) {
          display: block;
          font-size: 30px;
        }
        @media (min-width: 1100px ) {
          font-size: 35px;
        }
        @media (min-width: 1200px) {
          font-size: 45px;
        }
        @media (min-width: 1300px) {
          font-size: 50px;
        }
        @media (min-width: 1700px) {
          font-size: 60px;
        }
      color: $main-color;
      font-family: $text-font;
      font-size: 60px;
      margin-left: 50px;
      &:hover {
        color: $color-white;
      }
    }
    .navbar-nav {
      margin-right: 80px;
      @media (max-width: 992px) {
        margin-right: 0;
      }
      li {
        cursor: pointer;
        a {
          @media (max-width: 992px) {
            padding-left: 50px;
          }
          margin-left: 20px;
          color: $color-white;
          font-family: $text-font;
          &:hover {
            border-bottom: 2px solid $main-color;
          }
        }
        .active-nav-link {
          color: $main-color;
        }
      }
    }
    .navbar-collapse.collapse.show {
      @media (max-width: 992px) {
        background-color: black;
      }
    }
  }
}
`