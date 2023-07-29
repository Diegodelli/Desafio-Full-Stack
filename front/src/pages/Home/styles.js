import styled from "styled-components";

const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  header {
    height: 8rem;

    display: flex;
    align-items: center;

    border-bottom: 1px solid var(--gray-scale-1);

    position: relative;
  }

  header > div {
    width: 100%;
    max-width: 1260px;

    margin: auto;
    padding: 0 1.6rem;

    display: flex;
    align-items: center;
    justify-content: end;

    .buttonClose {
      display: flex;
      align-items: center;

      height: 3.2rem;
      padding: 0 1rem;

      background-color: var(--gray-scale-2);
      color: var(--gray-scale-5);

      font-weight: 600;
      font-size: 1.3rem;
      letter-spacing: 0.15rem;

      border: none;
      border-radius: 0.4rem;

      cursor: pointer;

      transition: 1s ease;
    }

    .buttonClose:hover {
      background-color: var(--color--brand3);
    }

    .buttonEdit {
      display: flex;
      align-items: center;

      height: 3.2rem;
      padding: 0 1rem;

      background-color: var(--color--brand1);
      color: var(--gray-scale-5);

      font-weight: 600;
      font-size: 1.3rem;
      letter-spacing: 0.15rem;

      border: none;
      border-radius: 0.4rem;

      margin-right: 2rem;

      transition: 1s ease;
    }

    .buttonEdit:hover {
      background-color: var(--color--brand3);
    }
  }

  section {
    height: 13rem;

    border-bottom: 1px solid var(--gray-scale-1);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  section > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 0 16px;
  }

  section > div > h3 {
    color: var(--gray-scale-3);
  }

  section > div > p {
    margin-bottom: 0;
    color: var(--gray-scale-4);
  }

  .sectionProduct {
    width: 100vw;

    display: flex;
    justify-content: center;

    margin-bottom: 4.5rem;
  }

  .listProducts {
    max-width: 1600px;

    display: flex;
    gap: 2rem;

    overflow-x: auto;

    margin-top: 2rem;
    padding: 0 2.5rem;
  }

  .listProducts > li {
    max-width: 28rem;
    min-width: 27.5rem;
    min-height: 36rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    background-color: var(--color--brand4);

    border-radius: 0.4rem;

    margin-bottom: 3.2rem;

    position: relative;

    figure {
      display: flex;
      align-items: center;
      justify-content: center;

      overflow: hidden;

      border-top-left-radius: 0.4rem;
      border-top-right-radius: 0.4rem;

      img {
        width: 100%;
        max-height: 20rem;

        background-color: var(--color--grey-7);

        border-top-left-radius: 0.4rem;
        border-top-right-radius: 0.4rem;

        transition: 0.8s ease;
      }

      img:hover {
        transform: scale(1.1);
      }
    }

    .divContent {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;

      padding: 0 0.75rem;
      padding-bottom: 1rem;

      h3 {
        color: var(--gray-scale-3);

        font-size: 1.6rem;
      }

      p {
        color: var(--gray-scale-3);

        font-size: 1.1rem;
      }

      div {
        width: 100%;
        position: absolute;
        bottom: 1.5rem;

        display: flex;

        .price {
          font-weight: 600;
        }

        .brand {
          font-weight: 600;
          font-size: 1.25rem;

          position: absolute;
          right: 1.5rem;

          color: var(--color--brand1);
        }
      }
    }
  }

  @media (min-width: 700px) {
    section > div {
      width: 100%;
      max-width: 1260px;

      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .listProducts {
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: calc(100% / 12);
      overflow: hidden;
    }
  }
`;

export default ContainerHome;
