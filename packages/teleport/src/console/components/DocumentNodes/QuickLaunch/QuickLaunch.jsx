/*
Copyright 2019 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import styled from 'styled-components';
import { Box, Input, LabelInput } from 'design';

export default function FieldInputSsh({ onPress, ...boxProps }) {
  const [hasError, setHasError] = React.useState(false);

  function onKeyPress(e) {
    const value = e.target.value;
    if ((e.key === 'Enter' || e.type === 'click') && value) {
      const valid = check(value);
      setHasError(!valid);
      if (valid) {
        const [login, serverId] = value.split('@');
        onPress(login, serverId);
      }
    } else {
      setHasError(false);
    }
  }

  const labelText = hasError ? 'Invalid' : 'Quick Launch';

  return (
    <Box {...boxProps}>
      <LabelInput hasError={hasError}>{labelText}</LabelInput>
      <StyledInput
        hasError={hasError}
        height="34px"
        width="240px"
        bg="primary.light"
        color="text.primary"
        placeholder="login@host"
        onKeyPress={onKeyPress}
        autoFocus
      />
    </Box>
  );
}

const SSH_STR_REGEX = /(^\w+@(\S+)$)/;
const check = value => {
  const match = SSH_STR_REGEX.exec(value);
  return match !== null;
};

const StyledInput = styled(Input)(
  ({ theme }) => `
  background: ${theme.colors.primary.light};
  border: 1px solid rgba(255, 255, 255, 0.56);
  &:hover {
    background: ${theme.colors.primary.lighter};
  }

  font-size: ${theme.fontSizes[2]}px;
  font-family: ${theme.font};

  &::placeholder {
    font-size: ${theme.fontSizes[2]}px;
  }
`
);
