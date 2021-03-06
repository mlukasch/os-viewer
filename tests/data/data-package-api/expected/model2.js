module.exports =
[
  {
    id: 'administrative_classification_admin1',
    key: 'administrative_classification_admin1.admin1',
    code: 'Administrative_classification-Admin1',
    hierarchy: 'administrative_classification',
    dimensionType: undefined,
    name: 'administrative_classification_admin1.admin1',
    label: 'administrative_classification_admin1.admin1',
    displayName: 'Administrative_classification-Admin1',
    drillDown: 'administrative_classification_admin2_code.admin2_code',
    original: {
      'key_ref': 'administrative_classification_admin1.admin1',
      'label': 'Administrative_classification-Admin1',
      'label_attribute': 'admin1',
      'cardinality_class': null,
      'ref': 'administrative_classification_admin1',
      'hierarchy': 'administrative_classification',
      'label_ref': 'administrative_classification_admin1.admin1',
      'orig_dimension': 'administrative-classification',
      'key_attribute': 'admin1',
      'attributes': {
        'admin1': {
          'column': 'admin1',
          'orig_attribute': 'admin1',
          'datatype': 'string',
          'label': 'Admin1',
          'ref': 'administrative_classification_admin1.admin1'
        }
      }
    }
  },
  {
    id: 'administrative_classification_admin2_code',
    key: 'administrative_classification_admin2_code.admin2_code',
    code: 'Administrative_classification-Admin2_code',
    hierarchy: 'administrative_classification',
    dimensionType: undefined,
    name: 'administrative_classification_admin2_code.admin2_code',
    label: 'administrative_classification_admin2_code.admin2_label',
    displayName: 'Administrative_classification-Admin2_code',
    drillDown: 'administrative_classification_admin3_code.admin3_code',
    original: {
      'key_ref': 'administrative_classification_admin2_code.admin2_code',
      'label': 'Administrative_classification-Admin2_code',
      'label_attribute': 'admin2_label',
      'cardinality_class': null,
      'ref': 'administrative_classification_admin2_code',
      'hierarchy': 'administrative_classification',
      'label_ref': 'administrative_classification_admin2_code.admin2_label',
      'orig_dimension': 'administrative-classification',
      'key_attribute': 'admin2_code',
      'attributes': {
        'admin2_code': {
          'column': 'admin2_code',
          'orig_attribute': 'admin2_code',
          'datatype': 'string',
          'label': 'Admin2_code',
          'ref': 'administrative_classification_admin2_code.admin2_code'
        },
        'admin2_label': {
          'column': 'admin2_label',
          'orig_attribute': 'admin2_label',
          'datatype': 'string',
          'label': 'Admin2_label',
          'ref': 'administrative_classification_admin2_code.admin2_label'
        }
      }
    }
  },
  {
    id: 'administrative_classification_admin3_code',
    key: 'administrative_classification_admin3_code.admin3_code',
    code: 'Administrative_classification-Admin3_code',
    hierarchy: 'administrative_classification',
    dimensionType: undefined,
    name: 'administrative_classification_admin3_code.admin3_code',
    label: 'administrative_classification_admin3_code.admin3_label',
    displayName: 'Administrative_classification-Admin3_code',
    drillDown: undefined,
    original: {
      'key_ref': 'administrative_classification_admin3_code.admin3_code',
      'label': 'Administrative_classification-Admin3_code',
      'label_attribute': 'admin3_label',
      'cardinality_class': null,
      'ref': 'administrative_classification_admin3_code',
      'hierarchy': 'administrative_classification',
      'label_ref': 'administrative_classification_admin3_code.admin3_label',
      'orig_dimension': 'administrative-classification',
      'key_attribute': 'admin3_code',
      'attributes': {
        'admin3_label': {
          'column': 'admin3_label',
          'orig_attribute': 'admin3_label',
          'datatype': 'string',
          'label': 'Admin3-Label',
          'ref': 'administrative_classification_admin3_code.admin3_label'
        },
        'admin3_code': {
          'column': 'admin3_code',
          'orig_attribute': 'admin3_code',
          'datatype': 'string',
          'label': 'Admin3-Code',
          'ref': 'administrative_classification_admin3_code.admin3_code'
        }
      }
    }
  },
  {
    id: 'location',
    key: 'location.title',
    code: 'Location',
    hierarchy: 'location',
    dimensionType: undefined,
    name: 'location.title',
    label: 'location.title',
    displayName: 'Location',
    drillDown: undefined,
    original: {
      'key_ref': 'location.title',
      'label': 'Location',
      'label_attribute': 'title',
      'cardinality_class': null,
      'ref': 'location',
      'hierarchy': 'location',
      'label_ref': 'location.title',
      'orig_dimension': 'location',
      'key_attribute': 'title',
      'attributes': {
        'title': {
          'column': 'admin2_label',
          'orig_attribute': 'title',
          'datatype': 'string',
          'label': 'Title',
          'ref': 'location.title'
        }
      }
    }
  },
  {
    id: 'other_exp_type',
    key: 'other_exp_type.exp_type',
    code: 'Other-Exp_type',
    hierarchy: 'other',
    dimensionType: undefined,
    name: 'other_exp_type.exp_type',
    label: 'other_exp_type.exp_type',
    displayName: 'Other-Exp_type',
    drillDown: 'other_transfer.transfer',
    original: {
      'key_ref': 'other_exp_type.exp_type',
      'label': 'Other-Exp_type',
      'label_attribute': 'exp_type',
      'cardinality_class': null,
      'ref': 'other_exp_type',
      'hierarchy': 'other',
      'label_ref': 'other_exp_type.exp_type',
      'orig_dimension': 'other',
      'key_attribute': 'exp_type',
      'attributes': {
        'exp_type': {
          'column': 'exp_type',
          'orig_attribute': 'exp_type',
          'datatype': 'string',
          'label': 'Exp_type',
          'ref': 'other_exp_type.exp_type'
        }
      }
    }
  },
  {
    id: 'other_fin_source',
    key: 'other_fin_source.fin_source',
    code: 'Other-Fin_source',
    hierarchy: 'other',
    dimensionType: undefined,
    name: 'other_fin_source.fin_source',
    label: 'other_fin_source.fin_source',
    displayName: 'Other-Fin_source',
    drillDown: 'other_exp_type.exp_type',
    original: {
      'key_ref': 'other_fin_source.fin_source',
      'label': 'Other-Fin_source',
      'label_attribute': 'fin_source',
      'cardinality_class': null,
      'ref': 'other_fin_source',
      'hierarchy': 'other',
      'label_ref': 'other_fin_source.fin_source',
      'orig_dimension': 'other',
      'key_attribute': 'fin_source',
      'attributes': {
        'fin_source': {
          'column': 'fin_source',
          'orig_attribute': 'fin_source',
          'datatype': 'string',
          'label': 'Fin_source',
          'ref': 'other_fin_source.fin_source'
        }
      }
    }
  },
  {
    id: 'other_transfer',
    key: 'other_transfer.transfer',
    code: 'Other-Transfer',
    hierarchy: 'other',
    dimensionType: undefined,
    name: 'other_transfer.transfer',
    label: 'other_transfer.transfer',
    displayName: 'Other-Transfer',
    drillDown: undefined,
    original: {
      'key_ref': 'other_transfer.transfer',
      'label': 'Other-Transfer',
      'label_attribute': 'transfer',
      'cardinality_class': null,
      'ref': 'other_transfer',
      'hierarchy': 'other',
      'label_ref': 'other_transfer.transfer',
      'orig_dimension': 'other',
      'key_attribute': 'transfer',
      'attributes': {
        'transfer': {
          'column': 'transfer',
          'orig_attribute': 'transfer',
          'datatype': 'string',
          'label': 'Transfer',
          'ref': 'other_transfer.transfer'
        }
      }
    }
  }
];
