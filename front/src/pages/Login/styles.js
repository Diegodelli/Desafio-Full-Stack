import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    width: 90%;
    max-width: 39rem;

    padding: 2.5rem 2rem;

    background-color: var(--gray-scale-2);

    border-radius: 2.4rem;
  }

  .link {
    height: 4rem;
    width: 100%;

    background-color: var(--color--brand2);
    color: var(--gray-scale-5);

    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 0.15rem;

    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    border-radius: 2.4rem;
  }
`;
