import styled from "styled-components";
import { Link } from "../components/link";
import { VgcGemeindeIcon } from "../vgcGemeinde/branding/icon";
import { useEffect, useState } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.padding.normal};
  background-color: ${({ theme }) => theme.colors.gallade};
  color: ${({ theme }) => theme.colors.text.bright};
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LeftSideLarge = styled(LeftSide)`
  flex-direction: row;
  align-items: center;
`;

const LeftSideTiny = styled(LeftSide)`
  flex-direction: column;
  align-items: flex-start;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.bright};
  margin-right: ${({ theme }) => theme.spacing.buffer.normal};
`;

const FooterText = styled.div`
  margin-right: ${({ theme }) => theme.spacing.buffer.normal};
`;

type FooterLink = {
  label: string;
  link: string;
};

const legalRequirements: FooterLink[] = [
  {
    label: "Impressum",
    link: "/impressum",
  },
  {
    label: "Datenschutzerklärung",
    link: "/datenschutzerklärung",
  },
];

const Icon = styled(VgcGemeindeIcon)`
  height: 50px;
  margin-right: ${({ theme }) => theme.spacing.buffer.gigantic};
`;

const Footer: React.FC = () => {
  const [currentMemberCount, setCurrentMemberCount] = useState<
    number | "loading"
  >("loading");

  const { upTo, downTo } = useScreenSize();

  const LeftSideC = upTo("tiny") ? LeftSideTiny : LeftSideLarge;

  useEffect(() => {
    void (async () => {
      let response = await fetch(
        "https://discord.com/api/v9/invites/An7DjBxWkh?with_counts=true"
      );

      let parsedResponse = await response.json();
      let fetchedCount = parsedResponse["approximate_member_count"];

      if (typeof fetchedCount === "number") {
        setCurrentMemberCount(fetchedCount);
      }
    })();
  }, []);

  return (
    <Container>
      <LeftSideC>
        <Icon />
        {legalRequirements.map(({ label, link }) => (
          <FooterLink to={link} key={label}>{label}</FooterLink>
        ))}
        <FooterLink
          to="https://www.paypal.com/paypalme/vgcgemeinde"
          target="_blank"
        >
          Spenden
        </FooterLink>
      </LeftSideC>
      { downTo("large") && (
        <RightSide>
          {[
            "Größte deutschsprachige VGC Community",
            "Heimat der VGC Bundesliga",
            `Aktuelle Mitglieder: ${currentMemberCount}`,
          ].map((text) => (
            <FooterText key={text}>{text}</FooterText>
          ))}
        </RightSide>
      )}
    </Container>
  );
};

export { Footer };
