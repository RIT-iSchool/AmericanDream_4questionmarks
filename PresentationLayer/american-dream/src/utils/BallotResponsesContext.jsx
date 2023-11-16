import { createContext } from 'react';
import * as React from "react";

const BallotResponsesContext = createContext({
    offices: [],
    initiatives: []
  });