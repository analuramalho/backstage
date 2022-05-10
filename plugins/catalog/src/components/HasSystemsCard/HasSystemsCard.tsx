/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { RELATION_HAS_PART, SystemEntity } from '@backstage/catalog-model';
import { InfoCardVariants, TableProps } from '@backstage/core-components';
import React from 'react';
import {
  asSystemEntities,
  RelatedEntitiesCard,
  systemEntityColumns,
  systemEntityHelpLink,
} from '../RelatedEntitiesCard';

/** @public */
export interface HasSystemsCardProps {
  variant?: InfoCardVariants;
  tableOptions?: TableProps<SystemEntity>['options'];
}

export function HasSystemsCard(props: HasSystemsCardProps) {
  const { variant = 'gridItem' } = props;
  return (
    <RelatedEntitiesCard
      variant={variant}
      title="Has systems"
      entityKind="System"
      relationType={RELATION_HAS_PART}
      columns={systemEntityColumns}
      asRenderableEntities={asSystemEntities}
      emptyMessage="No system is part of this domain"
      emptyHelpLink={systemEntityHelpLink}
    />
  );
}
