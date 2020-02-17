import styled from 'styled-components'

const color = {
  backgroundHover: '#FFEE58',
  timeText: '#2ECC71',
  fullName: 'yellow',
}

const ExperienceList = styled.div`
  .organization-data {
    padding-top: 3rem;
    width: 70%;
  }
  .organization-name {
    text-transform: uppercase;
    font-size: 2rem;
    color: ${color.fullName};
  }
  .organization-time {
    color: ${color.timeText}
    text-decoration-line: overline underline;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .organization-pos {
    font-size: 1rem;
  }
  .organization-des {
    padding-top: 0.5rem;
    .list-inline {
      list-style: none;
      max-width: 70%;
    }
    .dev-icons {
      font-size: 3rem;
      cursor: pointer;
    }
    .list-inline-item:not(:last-child) {
      margin-right: .5rem;
    }
    .list-inline-item {
    }
    i:hover {
      background-color: ${color.backgroundHover}
    }
  }
`

export default {
  ExperienceList
}