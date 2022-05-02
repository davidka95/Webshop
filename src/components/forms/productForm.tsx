import React, {useEffect, useRef} from 'react'
import {useForm, SubmitErrorHandler, Controller} from 'react-hook-form'
import {TextInput, ScrollView, View, Alert} from 'react-native'
import {strings} from '../../constants/localization/localization'
import {margins} from '../../constants/margins'
import {spaces} from '../../constants/spaces'
import {Button, ButtonComponent} from '../buttons/button'
import {SimpleTextInput} from '../textInputs/textInput'

export type ProductFormData = {
  name: string
  description: string
  quantity: string
}

interface ProductFormProps {
  buttonText: string
  initialValue?: ProductFormData
  onSubmit: (data: ProductFormData) => Promise<boolean>
}

export const ProductForm = (props: ProductFormProps) => {
  const descriptionInputRef = useRef<TextInput>(null)
  const quantityInputRef = useRef<TextInput>(null)
  const buttonRef = useRef<ButtonComponent>(null)

  const {handleSubmit, control, reset, setValue} = useForm<ProductFormData>()

  const onSubmit = async (data: ProductFormData) => {
    const isSuccess = await props.onSubmit(data)
    if (isSuccess) {
      reset()
    } else {
      buttonRef.current?.animate()
    }
  }

  const onError: SubmitErrorHandler<ProductFormData> = () => {
    Alert.alert(strings.errors.attention, strings.productForm.checkFields)
    buttonRef.current?.animate()
  }

  useEffect(() => {
    if (props.initialValue) {
      setValue('name', props.initialValue.name)
      setValue('description', props.initialValue.description)
      setValue('quantity', props.initialValue.quantity)
    }
  }, [])

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
                textAlignVertical: 'top',
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
        ref={buttonRef}
        title={props.buttonText}
        onPress={handleSubmit(onSubmit, onError)}
      />
    </ScrollView>
  )
}
