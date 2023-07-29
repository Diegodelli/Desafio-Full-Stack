import styled from "styled-components";

export const ContainerModalLoggedIn = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--gray-scale-5);
  background-color: var(--black-opacity);

  .content__modal {
    width: 90%;
    max-width: 370px;

    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--gray-scale-2);

    border-radius: 0.8rem;

    animation: showModal 1.5s ease;
  }

  .header__modal {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1.375rem;

    height: 4rem;

    background-color: var(--gray-scale-3);

    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;

    width: 100%;
  }

  .header__modal > h4 {
    font-size: 1.8rem;
  }

  .link {
    height: var(--btn-input-height);
    width: 45%;
    margin: 30px;

    background-color: var(--color--brand3);
    color: var(--gray-scale-5);

    font-size: 1.6rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    border-radius: 0.6rem;

    padding: 0.75rem;
  }

  @keyframes showModal {
    0% {
      opacity: 0;
      top: 0%;
    }

    50% {
      opacity: 1;
      top: 30%;
    }
  }
`;
