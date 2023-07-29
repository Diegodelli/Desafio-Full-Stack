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

  @media (min-width: 700px) {
    section > div {
      width: 100%;
      max-width: 1260px;

      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default ContainerHome;
