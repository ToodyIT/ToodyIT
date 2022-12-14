import { FC } from 'react';
import { StyledTemplateName } from './TemplateName.styled';

interface TemplateNameProps {

}

const TemplateName: FC<TemplateNameProps> = ({  }) => {
  return (
    <StyledTemplateName data-testid="template-name">

    </StyledTemplateName>
  );
};

export default TemplateName;