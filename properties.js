const properties= [
    {
      key: "R_IN_CC",
      label: "R_IN_CC",
            nodes: [
                    {
                    key: "EAD",
                    label: "EAD",
                            nodes: [{
                                key:"R_IN_CC_EADLT_1",
                                label:"R_IN_CC_EADLT_1"
                            },{
                                key:"R_IN_CC_EADLT_2",
                                label:"R_IN_CC_EADLT_2"
                            },{
                                key:"R_IN_CC_EADLT_3",
                                label:"R_IN_CC_EADLT_3"
                            }]
                    },
                    {
                        key: "LGD",
                        label: "LGD",
                                nodes: []
                    }
            ]
    }
  ];

  const modaldata =[{
      modelId:"R_IN_CC_EADLT_1_V1",
      name:"R_IN_CC_EADLT_1",
      modelDescription:"",
      modelDeveloper:"",
      modelType:"linear",
      modelCategory:"EAD",
      modelInst:"R_INC_CC",
      modelSegld:1,
      modelFormula1:"",
      modelFormula:""
  },{
    modelId:"R_IN_CC_EADLT_2_V1",
    name:"R_IN_CC_EADLT_2",
    modelDescription:"",
    modelDeveloper:"",
    modelType:"linear",
    modelCategory:"EAD",
    modelInst:"R_INC_CC",
    modelSegld:1,
    modelFormula1:"",
    modelFormula:""
},{
    modelId:"R_IN_CC_EADLT_3_V1",
    name:"R_IN_CC_EADLT_3",
    modelDescription:"",
    modelDeveloper:"",
    modelType:"linear",
    modelCategory:"EAD",
    modelInst:"R_INC_CC",
    modelSegld:1,
    modelFormula1:"",
    modelFormula:""
}]

  export   {properties,modaldata};