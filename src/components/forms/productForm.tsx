import React, {useRef} from 'react'
import {useForm, SubmitErrorHandler, Controller} from 'react-hook-form'
import {TextInput, ScrollView, View} from 'react-native'
import {strings} from '../../constants/localization/localization'
import {margins} from '../../constants/margins'
import {spaces} from '../../constants/spaces'
import {Button} from '../buttons/button'
import {SimpleTextInput} from '../textInputs/textInput'

type FormData = {
  name: string
  description: string
  quantity: string
}

interface ProductFormProps {
  buttonText: string
  onSubmit: (data: FormData) => void
}

export const ProductForm = (props: ProductFormProps) => {
  const descriptionInputRef = useRef<TextInput>(null)
  const quantityInputRef = useRef<TextInput>(null)

  const {handleSubmit, control} = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    props.onSubmit(data)
  }

  const onError: SubmitErrorHandler<FormData> = errors => {
    return console.log(errors)
  }

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: spaces.contentHorizontal,
        paddingVertical: spaces.contentVertical,
        justifyContent: 'space-between',
      }}>
      <View>
        <Controller
          control={control}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <SimpleTextInput
              error={error?.message}
              style={margins.mbMedium}
              label={strings.productForm.name}
              textInputProps={{
                placeholder: strings.productForm.namePlaceholder,
                value: value.toString(),
                onChangeText: onChange,
                returnKeyType: 'next',
                onSubmitEditing: () => descriptionInputRef?.current?.focus?.(),
              }}
            />
          )}
          name="name"
          rules={{
            required: strings.productForm.nameEmpty,
          }}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <SimpleTextInput
              ref={descriptionInputRef}
              error={error?.message}
              style={margins.mbMedium}
              label={strings.productForm.description}
              textInputProps={{
                placeholder: strings.productForm.descriptionPlaceholder,
                value: value.toString(),
                onChangeText: onChange,
                multiline: true,
                returnKeyType: 'next',
                style: {minHeight: 200},
                onSubmitEditing: () => quantityInputRef?.current?.focus?.(),
              }}
            />
          )}
          name="description"
          rules={{
            required: strings.productForm.descriptionEmpty,
          }}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <SimpleTextInput
              ref={quantityInputRef}
              error={error?.message}
              style={margins.mbMedium}
              label={strings.productForm.quantity}
              textInputProps={{
                placeholder: strings.productForm.quantityPlaceholder,
                keyboardType: 'decimal-pad',
                value: value.toString(),
                onChangeText: onChange,
                returnKeyType: 'done',
              }}
            />
          )}
          name="quantity"
          rules={{
            required: strings.productForm.quantityEmpty,
          }}
          defaultValue=""
        />
      </View>
      <Button
        title={strings.createProduct.create}
        onPress={handleSubmit(onSubmit, onError)}
      />
    </ScrollView>
  )
}
